import React from "react";
import Header from "@/components/Header";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Editor } from "@/components/editor/Editor";
import CollaborativeRoom from "@/components/CollaborativeRoom";

const Document = () => {
  return (
    <main className="flex w-full flex-col items-center">
      <CollaborativeRoom />
    </main>
  );
};

export default Document;
