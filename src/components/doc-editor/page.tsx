"use client";

import React, { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";

// Dynamically import TiptapEditor to ensure it's only rendered on the client side
const TiptapEditor = dynamic(() => import("../ui/editor-extensions"), {
  ssr: false, // Disable server-side rendering
});

const EditorWrapper: React.FC = () => {
  return (
    <div className="border p-4 rounded-lg">
      <Suspense fallback={<p>Loading editor...</p>}>
        <TiptapEditor />
      </Suspense>
    </div>
  );
};

export default EditorWrapper;
