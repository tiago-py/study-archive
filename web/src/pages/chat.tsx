"use client";

import {
  Menu,
  Plus,
  HelpCircle,
  ChevronDown,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Aside from "@/components/Aside";
import "@/app/globals.css";

export default function ChatPDFInterface() {
  return (
    <Aside>
      <div className="flex flex-col h-screen bg-slate-950 text-white">
        {/* Header */}
        <header className="flex items-center p-4 border-b border-slate-800">
          <div className="flex items-center flex-1">
            <Button variant="ghost" size="icon" className="hover:bg-slate-800 mr-2">
              <Menu className="h-5 w-5 mx-auto" />
            </Button>

            <Button variant="ghost" size="icon" className="hover:bg-slate-800 mr-4">
              <HelpCircle className="h-5 w-5 mx-auto" />
            </Button>

            <div className="flex items-center">
              <span className="font-medium">ChatPDF</span>
              <ChevronDown className="h-4 w-4 ml-1 text-slate-400" />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center p-6">
          <h1 className="text-3xl font-semibold mb-8">Como posso ajudar?</h1>

          {/* Input Area */}
          <div className="w-full max-w-2xl relative">
            <div className="bg-slate-900 rounded-xl border border-slate-700 px-4 py-2 flex items-center hover:border-slate-600 transition-colors shadow-md">
              {/* Botão de adicionar */}
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-blue-600 h-7 w-7 flex items-center justify-center shadow-md"
              >
                <Plus className="h-5 w-5" />
              </Button>

              {/* Input */}
              <input
                type="text"
                placeholder="Pergunte alguma coisa"
                className="bg-transparent flex-1 outline-none text-white placeholder-slate-500 px-4"
              />

              {/* Botão de enviar */}
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-blue-600 h-7 w-7 flex items-center justify-center shadow-md transition-colors"
              >
                <Send className="h-4 w-4 text-white" />
              </Button>
            </div>
          </div>
        </main>
      </div>
    </Aside>
  );
}
