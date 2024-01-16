'use client';
import React from 'react'
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";

const GoBackButton = ({path='/'}) => {
  const router = useRouter();
  return (
    <Button size="sm" className="w-32"
      onClick={() => router.push(path)}
    >
      ย้อนกลับ
    </Button>
  );
}

export default GoBackButton