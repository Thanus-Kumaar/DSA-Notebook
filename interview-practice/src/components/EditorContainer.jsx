import React, { useEffect, useRef } from "react";
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import "codemirror/theme/solarized.css";
import "codemirror/mode/clike/clike";
import "codemirror/mode/python/python";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/show-hint.css";

const boilerplates = {
  cpp: `#include <bits/stdc++.h>
using namespace std;
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    // Your code here

    return 0;
}`,
  python: `def main():
    # Your code here
    pass

if __name__ == "__main__":
    main()`,
  java: `import java.util.*;
public class Main {
    public static void main(String[] args) {
        // Your code here
    }
}`,
};

export default function EditorContainer({ language }) {
  const editorRef = useRef(null);
  const cmInstance = useRef(null);

  useEffect(() => {
    // Clear the container first
    if (editorRef.current) {
      editorRef.current.innerHTML = '';
    }

    // Create the CodeMirror instance
    cmInstance.current = CodeMirror(editorRef.current, {
      value: boilerplates[language] || "",
      lineNumbers: true,
      lineWrapping: true,
      indentUnit: 4,
      indentWithTabs: false,
      smartIndent: true,
      matchBrackets: true,
      autoCloseBrackets: true,
      styleActiveLine: true,
      highlightSelectionMatches: { showToken: /\w/ },
      theme: "dracula",
      mode:
        language === "cpp"
          ? "text/x-c++src"
          : language === "python"
          ? "python"
          : language === "java"
          ? "text/x-java"
          : "text/plain",
    });

    // Make CodeMirror take full height
    cmInstance.current.getWrapperElement().style.height = '100%';
    cmInstance.current.setSize('98%', '95%');

    // Cleanup function
    return () => {
      if (cmInstance.current) {
        cmInstance.current.getWrapperElement().remove();
        cmInstance.current = null;
      }
    };
  }, [language]); // Include language as dependency

  return <div ref={editorRef} className="h-full w-full rounded" style={{ display: 'flex', flexDirection: 'column' }} />;
}