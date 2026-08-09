"use client";

import { FormEvent, useState } from "react";
import { Bot, Send, User } from "lucide-react";
import { useTranslations } from "next-intl";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function DevAssistant() {
  const t = useTranslations("assistant");

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: t("welcome"),
    },
  ]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const question = input.trim();
    if (!question || loading) return;

    setMessages((current) => [
      ...current,
      { role: "user", content: question },
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: data.answer ?? "I could not process that question.",
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "The assistant is temporarily unavailable. Please use the Contact page instead.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="holo-card glass rounded-[2rem] p-5 sm:p-8">
      <div className="mb-7 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
          <Bot size={20} />
        </span>

        <div>
          <p className="font-semibold">Omni Assistant</p>
          <p className="font-mono text-[10px] tracking-[0.2em] text-slate-500">
            PORTFOLIO KNOWLEDGE CORE
          </p>
        </div>
      </div>

      <div className="grid max-h-[440px] gap-4 overflow-y-auto pr-2">
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            className={`flex gap-3 ${
              message.role === "user" ? "flex-row-reverse" : ""
            }`}
          >
            <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-400">
              {message.role === "user" ? <User size={14} /> : <Bot size={14} />}
            </span>

            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-7 ${
                message.role === "user"
                  ? "bg-cyan-300 text-slate-950"
                  : "bg-white/5 text-slate-300"
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="text-sm text-cyan-200">Thinking through the orbit...</div>
        )}
      </div>

      <form onSubmit={submit} className="mt-7 flex gap-3">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder={t("placeholder")}
          className="min-w-0 flex-1 rounded-full border border-white/10 bg-black/20 px-5 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/70"
        />

        <button
          type="submit"
          disabled={loading}
          className="flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Send size={15} />
          {t("send")}
        </button>
      </form>
    </div>
  );
}
