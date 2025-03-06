"use client";
import { LogoutLink, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/config/FirebaseConfig";
import { useRouter } from "next/navigation";
import MeetingType from "./meeting-type/page";

function Dashboard() {
  const { user } = useKindeBrowserClient();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (user?.email) {
      isBusinessRegistered();
    }
  }, [user]);

  const isBusinessRegistered = async () => {
    try {
      if (!user?.email) return;

      const docRef = doc(db, "Business", user.email);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        console.log("No such document!");
        router.replace("/create-business");
      }
    } catch (error) {
      console.error("Firestore error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <MeetingType />
    </div>
  );
}

export default Dashboard;
