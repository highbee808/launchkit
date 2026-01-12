export interface SavedDocument {
  id: string;
  type: string;
  companyName: string;
  websiteUrl: string;
  email: string;
  data: string[];
  content: string;
  createdAt: number;
}

const STORAGE_KEY = "launchkit_documents";
const EXPIRY_HOURS = 24;

export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

export function getDocuments(): SavedDocument[] {
  if (typeof window === "undefined") return [];

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];

    const documents: SavedDocument[] = JSON.parse(stored);
    const now = Date.now();
    const expiryMs = EXPIRY_HOURS * 60 * 60 * 1000;

    // Filter out expired documents
    const valid = documents.filter((doc) => now - doc.createdAt < expiryMs);

    // If any were removed, update storage
    if (valid.length !== documents.length) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(valid));
    }

    return valid;
  } catch {
    return [];
  }
}

export function saveDocument(doc: Omit<SavedDocument, "id" | "createdAt">): SavedDocument {
  const newDoc: SavedDocument = {
    ...doc,
    id: generateId(),
    createdAt: Date.now(),
  };

  const documents = getDocuments();
  documents.unshift(newDoc);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(documents));

  return newDoc;
}

export function getDocument(id: string): SavedDocument | null {
  const documents = getDocuments();
  return documents.find((doc) => doc.id === id) || null;
}

export function deleteDocument(id: string): void {
  const documents = getDocuments();
  const filtered = documents.filter((doc) => doc.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
}

export function clearAllDocuments(): void {
  localStorage.removeItem(STORAGE_KEY);
}

export function getTimeRemaining(createdAt: number): string {
  const now = Date.now();
  const expiryMs = EXPIRY_HOURS * 60 * 60 * 1000;
  const remaining = expiryMs - (now - createdAt);

  if (remaining <= 0) return "Expired";

  const hours = Math.floor(remaining / (60 * 60 * 1000));
  const minutes = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000));

  if (hours > 0) {
    return `${hours}h ${minutes}m remaining`;
  }
  return `${minutes}m remaining`;
}
