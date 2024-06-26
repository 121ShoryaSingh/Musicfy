"use client"

import { useEffect, useState } from "react"

import Modal from "@/components/Modal";

const ModelProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
    },[])

    if(!isMounted) {
        return null;
    }

  return (
    <>
        <Modal title="Test Model" description="Test Description" isOpen onChange={() => {}}>
          Test Children
        </Modal>
    </>
  );
}

export default ModelProvider