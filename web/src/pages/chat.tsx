import { Menu, Plus, Search, MoreHorizontal, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ChatPDFInterface() {
  return (
    <div className="flex flex-col h-screen bg-[#1e1e1e] text-white">
      {/* Header */}
      <header className="flex items-center p-4 border-b border-gray-800">
        <Button variant="ghost" size="icon" className="mr-2">
          <Menu className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="m22 22-2-2" />
            <path d="M12 18c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z" />
          </svg>
        </Button>
        <div className="flex items-center">
          <span className="font-medium">ChatPDF</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 ml-1"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>

        <div className="ml-auto flex items-center">
          <Button variant="outline" size="sm" className="rounded-full text-xs bg-transparent border-gray-700 mr-2">
            Temporário
          </Button>
          <div className="h-8 w-8 rounded-full bg-pink-500 flex items-center justify-center text-white font-medium">
            T
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-medium mb-8">Como posso ajudar?</h1>

        {/* Input Area */}
        <div className="w-full max-w-2xl relative">
          <div className="bg-[#2a2a2a] rounded-xl border border-gray-700 p-4 flex items-center">
            <input
              type="text"
              placeholder="Pergunte alguma coisa"
              className="bg-transparent flex-1 outline-none text-white"
            />
            <div className="h-2 w-2 rounded-full bg-purple-500 mr-2"></div>
          </div>

          {/* Buttons below input */}
          <div className="flex items-center mt-2 px-2">
            <Button variant="ghost" size="icon" className="rounded-full bg-[#2a2a2a] h-9 w-9 mr-2">
              <Plus className="h-4 w-4" />
            </Button>

            <Button variant="ghost" className="rounded-full bg-[#2a2a2a] text-sm px-4 h-9 mr-2">
              <Search className="h-4 w-4 mr-2" />
              Buscar
            </Button>

            <Button variant="ghost" className="rounded-full bg-[#2a2a2a] text-sm px-4 h-9 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 mr-2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              Refletir
            </Button>

            <Button variant="ghost" size="icon" className="rounded-full bg-[#2a2a2a] h-9 w-9">
              <MoreHorizontal className="h-4 w-4" />
            </Button>

            <div className="ml-auto">
              <Button variant="ghost" size="icon" className="rounded-full bg-[#2a2a2a] h-9 w-9">
                <Mic className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

