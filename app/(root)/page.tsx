import AddDocumentBtn from "@/components/AddDocumentBtn";
import Header from "@/components/Header";
import { getDocuments } from "@/lib/actions/room.actions";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const Home = async () => {
  const clerkUser = await currentUser();
  if (!clerkUser) redirect("/sign-in");

  const roomDocuments = await getDocuments(
    clerkUser.emailAddresses[0].emailAddress
  );

  return (
    <div>
      <main className="home-container">
        <Header className="sticky left-0 top-0">
          <div className="flex items-center gap-2 lg:gap-4">
            Notification
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </Header>

        {roomDocuments.data.length > 0 ? (
          <div className="document-list-container">
            <div className="document-list-title">
              <h3 className="text-28-semibold">All documents</h3>
            </div>
          </div>
        ) : (
          <div className="document-list-empty">
            <Image
              src="/assets/icons/doc.svg"
              alt="Document"
              width={40}
              height={40}
              className="mx-auto"
            />

            <AddDocumentBtn
              userId={clerkUser.id}
              email={clerkUser.emailAddresses[0].emailAddress}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
