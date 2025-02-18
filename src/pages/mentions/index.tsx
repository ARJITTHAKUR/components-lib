import { useRef, useState } from "react";

export const Mentions = () => {
  const [suggestions, setSuggestions] = useState([]); // List of email suggestions
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [mentionPosition, setMentionPosition] = useState(null);
  const editorRef = useRef(null);

  // Mock API call to fetch email suggestions
  const fetchEmailSuggestions = async (query) => {
    const mockEmails = [
      { email: "test@email.com", displayName: "John Doe" },
      { email: "user@example.com", displayName: "Jane Smith" },
      { email: "hello@world.com", displayName: "Alex Johnson" },
    ];
    return mockEmails.filter((user) => user.email.includes(query));
  };

  // Function to get caret position in the contenteditable div
  const getCaretPosition = () => {
    const selection = window.getSelection();
    return selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
  };

  // Function to restore caret position after inserting mention
  const setCaretPosition = (range) => {
    if (!range) return;
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  };

  // Handles input event in contenteditable div
  const handleInput = async (e) => {
    const text = editorRef.current.innerHTML;
    const caretRange = getCaretPosition();

    // Match the email pattern only after the user has typed `@` and some valid text (e.g., email.com)
    const match = text.match(/@([\w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+)/);

    // If the user has typed a valid email with @
    if (match) {
      const query = match[1];

      // Fetch email suggestions based on the input
      const suggestions = await fetchEmailSuggestions(query);
      setSuggestions(suggestions);
      setShowSuggestions(suggestions.length > 0);

      // Save the mention start position
      setMentionPosition(match.index);
    } else {
      setShowSuggestions(false);
    }
  };

  // Handles selection of an email from suggestions
  const handleSelectMention = (email, displayName) => {
    if (!mentionPosition || !editorRef.current) return;

    const text = editorRef.current.innerHTML;

    // Replace @email with a mention span
    const updatedText =
      text.substring(0, mentionPosition) +
      `<span contenteditable="false" style="color: blue; font-weight: bold;">${displayName}</span>&nbsp;` +
      text.substring(mentionPosition + email.length + 1);

    editorRef.current.innerHTML = updatedText;
    setShowSuggestions(false);

    // Restore caret after the mention
    const newRange = document.createRange();
    newRange.setStartAfter(editorRef.current.lastChild);
    newRange.collapse(true);
    setCaretPosition(newRange);
  };

  return (
    <div style={{ position: "relative", width: "400px" }}>
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          minHeight: "100px",
          outline: "none",
          fontSize: "16px",
          whiteSpace: "pre-wrap",
        }}
      ></div>

      {/* Autocomplete dropdown */}
      {showSuggestions && (
        <ul
          style={{
            position: "absolute",
            background: "white",
            border: "1px solid #ccc",
            padding: "5px",
            listStyle: "none",
            width: "200px",
            margin: "5px 0",
          }}
        >
          {suggestions.map((user, index) => (
            <li
              key={index}
              style={{
                padding: "5px",
                cursor: "pointer",
                background: "#f8f8f8",
                borderBottom: "1px solid #ddd",
              }}
              onMouseDown={() =>
                handleSelectMention(user.email, user.displayName)
              }
            >
              {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
