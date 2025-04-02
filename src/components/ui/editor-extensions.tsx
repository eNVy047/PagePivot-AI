"use client";

import React, { useState, useEffect } from "react";
import { useEditor, EditorContent, EditorOptions, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
// import Ai from "@tiptap-pro/extension-ai";
import Details from "@tiptap-pro/extension-details";
import DetailsContent from "@tiptap-pro/extension-details-content";
import DetailsSummary from "@tiptap-pro/extension-details-summary";
import DragHandle from "@tiptap-pro/extension-drag-handle";
import DragHandleReact from "@tiptap-pro/extension-drag-handle-react";
import Emoji from "@tiptap-pro/extension-emoji";
import FileHandler from "@tiptap-pro/extension-file-handler";
import Mathematics from "@tiptap-pro/extension-mathematics";
import NodeRange from "@tiptap-pro/extension-node-range";
import TableOfContents from "@tiptap-pro/extension-table-of-contents";
import UniqueId from "@tiptap-pro/extension-unique-id";
import BulletList from "@tiptap/extension-bullet-list";
import CharacterCount from "@tiptap/extension-character-count";
import CodeBlock from "@tiptap/extension-code-block";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import Color from "@tiptap/extension-color";
import Document from "@tiptap/extension-document";
import Dropcursor from "@tiptap/extension-dropcursor";
import Focus from "@tiptap/extension-focus";
import FontFamily from "@tiptap/extension-font-family";
import Heading from "@tiptap/extension-heading";
import Highlight from "@tiptap/extension-highlight";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import OrderedList from "@tiptap/extension-ordered-list";
import Paragraph from "@tiptap/extension-paragraph";
import Placeholder from "@tiptap/extension-placeholder";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Typography from "@tiptap/extension-typography";
import Underline from "@tiptap/extension-underline";

const EditorExtensions: React.FC = () => {
  const [editor, setEditor] = useState<Editor | null>(null);

  useEffect(() => {
    const newEditor = useEditor({
      extensions: [
        StarterKit,
      // Ai,
      Details,
      DetailsContent,
      DetailsSummary,
      DragHandle,
      DragHandleReact,
      Emoji,
      FileHandler,
      Mathematics,
      NodeRange,
      TableOfContents,
      UniqueId,
      BulletList,
      CharacterCount,
      CodeBlock,
      CodeBlockLowlight,
      Collaboration,
      CollaborationCursor,
      Color,
      Document,
      Dropcursor,
      Focus,
      FontFamily,
      Heading,
      Highlight,
      HorizontalRule,
      Image,
      Link,
      OrderedList,
      Paragraph,
      Placeholder.configure({ placeholder: "Start writing..." }),
      Subscript,
      Superscript,
      Table.configure({ resizable: true }),
      TableRow,
      TableCell,
      TableHeader,
      TaskItem,
      TaskList,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      TextStyle,
      Typography,
      Underline,
    ],
    content: "<p>Start editing...</p>",
    editorProps: {
      attributes: {
        class: "border rounded p-4 min-h-[200px] focus:outline-none",
      },
    },
    immediatelyRender: false, // Fix SSR hydration issues
    } as Partial<EditorOptions>);

    setEditor(newEditor);

    return () => {
      // Clean up editor instance when component unmounts
      newEditor?.destroy();
    };
  }, []); // Only runs on

  if (typeof window === 'undefined' || !editor) return <p>Loading editor...</p>;

  return (
    <div className="border p-4 rounded-lg">
      <EditorContent editor={editor} />
    </div>
  );
};

export default EditorExtensions;
