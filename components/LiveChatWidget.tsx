"use client"

import { useEffect, useRef } from "react"

function ChatIcon() {
  return (
    <svg
      className="size-6 shrink-0"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
      />
    </svg>
  )
}

export default function LiveChatWidget() {
  const scriptLoaded = useRef(false)

  useEffect(() => {
    if (scriptLoaded.current) return
    scriptLoaded.current = true

    // TODO: Replace this block with actual Bitrix24 script
    // Script will look like:
    // <script data-b24-form="..." data-skip-moving="true">
    //   (function(w,d,u){...})
    // </script>
    console.log("Bitrix24 Live Chat: script placeholder")
  }, [])

  const handleOpenChat = () => {
    // TODO: Replace with actual Bitrix24 chat open trigger
    console.log("Chat opened")
  }

  return (
    <button
      type="button"
      onClick={handleOpenChat}
      aria-label="Open Live Chat"
      className="group fixed bottom-24 right-6 z-50 flex h-14 max-w-14 flex-row-reverse items-center overflow-hidden rounded-full bg-button text-button-foreground shadow-lg shadow-button/25 transition-all duration-300 ease-in-out hover:max-w-[11.5rem] hover:px-5"
    >
      <span className="flex size-14 shrink-0 items-center justify-center">
        <ChatIcon />
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 ease-in-out group-hover:max-w-[7.5rem] group-hover:pr-1 group-hover:opacity-100">
        Live Chat
      </span>
    </button>
  )
}
