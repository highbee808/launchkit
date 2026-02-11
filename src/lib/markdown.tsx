import React from "react";

type Token =
  | { type: "bold"; content: string }
  | { type: "italic"; content: string }
  | { type: "code"; content: string }
  | { type: "link"; text: string; url: string }
  | { type: "text"; content: string };

function tokenize(text: string): Token[] {
  const tokens: Token[] = [];
  // Match: **bold**, *italic*, `code`, [text](url), bare URLs, emails
  const regex = /(\*\*(.+?)\*\*)|(\*(.+?)\*)|(`(.+?)`)|\[([^\]]+)\]\(([^)]+)\)|(https?:\/\/[^\s<]+[^\s<.,;:!?)\]"'])|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    // Text before the match
    if (match.index > lastIndex) {
      tokens.push({ type: "text", content: text.slice(lastIndex, match.index) });
    }

    if (match[1]) {
      // **bold**
      tokens.push({ type: "bold", content: match[2] });
    } else if (match[3]) {
      // *italic*
      tokens.push({ type: "italic", content: match[4] });
    } else if (match[5]) {
      // `code`
      tokens.push({ type: "code", content: match[6] });
    } else if (match[7]) {
      // [text](url)
      tokens.push({ type: "link", text: match[7], url: match[8] });
    } else if (match[9]) {
      // bare URL
      tokens.push({ type: "link", text: match[9], url: match[9] });
    } else if (match[10]) {
      // email
      tokens.push({ type: "link", text: match[10], url: `mailto:${match[10]}` });
    }

    lastIndex = match.index + match[0].length;
  }

  // Remaining text
  if (lastIndex < text.length) {
    tokens.push({ type: "text", content: text.slice(lastIndex) });
  }

  return tokens;
}

export function renderInlineMarkdown(text: string): React.ReactNode[] {
  const tokens = tokenize(text);
  return tokens.map((token, i) => {
    switch (token.type) {
      case "bold":
        return <strong key={i} className="font-semibold text-foreground">{token.content}</strong>;
      case "italic":
        return <em key={i} className="italic">{token.content}</em>;
      case "code":
        return (
          <code key={i} className="px-1.5 py-0.5 rounded bg-secondary/50 text-xs font-mono text-foreground/80">
            {token.content}
          </code>
        );
      case "link":
        return (
          <a
            key={i}
            href={token.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-2 hover:text-primary/80"
          >
            {token.text}
          </a>
        );
      case "text":
        return <React.Fragment key={i}>{token.content}</React.Fragment>;
    }
  });
}

export function renderInlineMarkdownHTML(text: string): string {
  const tokens = tokenize(text);
  return tokens
    .map((token) => {
      switch (token.type) {
        case "bold":
          return `<strong>${escapeHtml(token.content)}</strong>`;
        case "italic":
          return `<em>${escapeHtml(token.content)}</em>`;
        case "code":
          return `<code>${escapeHtml(token.content)}</code>`;
        case "link":
          return `<a href="${escapeHtml(token.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(token.text)}</a>`;
        case "text":
          return escapeHtml(token.content);
      }
    })
    .join("");
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
