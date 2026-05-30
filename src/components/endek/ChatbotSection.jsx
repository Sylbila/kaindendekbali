import { useState, useRef } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Send,
 Bot,
  User,
  Sparkles,
} from "lucide-react";

export const ChatbotSection = () => {

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Om Swastiastu 🙏 Saya asisten AI Kain Endek Bali. Silakan tanyakan apa saja tentang motif, makna, sejarah, atau budaya Endek Bali.",
    },
  ]);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  /* =========================
     HANDLE SEND TO N8N
  ========================= */

  const handleSend = async () => {

    if (!input.trim() || loading) return;

    const userMsg = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMsg]);

    const userInput = input;

    setInput("");

    setLoading(true);

    try {

      const response = await fetch(
        "https://hunchback-turbofan-happier.ngrok-free.dev/webhook/endek",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            chatInput: userInput,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Gagal mengambil response AI");
      }

      // karena n8n return text biasa
      const text = await response.text();

      const botReply = {
        role: "assistant",
        content: text,
      };

      setMessages((prev) => [...prev, botReply]);

    } catch (error) {

      console.error("ERROR:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Maaf, terjadi kesalahan saat menghubungi AI Endek.",
        },
      ]);

    } finally {

      setLoading(false);
    }
  };

  return (
    <section
      id="chatbot"
      className="py-20 md:py-28 relative overflow-hidden bg-[#F5EFE6]"
    >

      {/* Background */}
      <div className="absolute inset-0 pattern-endek opacity-5 pointer-events-none" />

      <div className="container relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10">

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-1.5
              rounded-full
              bg-[#E8D8BE]/60
              border
              border-[#D1B07A]
              text-[#8B6B4A]
              mb-4
            "
          >

            <Sparkles className="h-4 w-4" />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-wider
              "
            >
              Generative AI
            </span>
          </div>

          <h2
            className="
              text-3xl
              md:text-5xl
              font-bold
              text-[#6B4F3A]
              mb-4
            "
          >
            Tanya Asisten AI tentang Endek
          </h2>

          <p
            className="
              text-[#7A5C45]
              text-base
              md:text-lg
            "
          >
            Tanya jawab interaktif tentang motif,
            sejarah, filosofi, dan budaya Endek Bali.
          </p>
        </div>

        {/* CHAT BOX */}
        <div
          className="
            max-w-3xl
            mx-auto
            bg-[#FFFDF9]
            rounded-3xl
            shadow-2xl
            overflow-hidden
            border
            border-[#D8C2A0]
          "
        >

          {/* TOP HEADER */}
          <div
            className="
              bg-[#8B6B4A]
              px-6
              py-4
              flex
              items-center
              gap-3
            "
          >

            <div
              className="
                h-10
                w-10
                rounded-full
                bg-[#D4B483]
                flex
                items-center
                justify-center
              "
            >
              <Bot className="h-5 w-5 text-[#5B3E2B]" />
            </div>

            <div>

              <p className="font-bold text-white">
                Endek AI Assistant
              </p>

              <p
                className="
                  text-xs
                  text-[#F3E7D3]
                  flex
                  items-center
                  gap-1
                "
              >
                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-green-400
                    animate-pulse
                  "
                />

                Online
              </p>

            </div>
          </div>

          {/* MESSAGES */}
          <div
            className="
              p-5
              md:p-6
              space-y-4
              max-h-[500px]
              overflow-y-auto
              bg-[#F9F5EF]
            "
          >

            {messages.map((m, i) => (

              <div
                key={i}
                className={`flex gap-3 ${
                  m.role === "user"
                    ? "flex-row-reverse"
                    : ""
                }`}
              >

                {/* AVATAR */}
                <div
                  className={`
                    shrink-0
                    h-9
                    w-9
                    rounded-full
                    flex
                    items-center
                    justify-center
                    ${
                      m.role === "user"
                        ? "bg-[#D4B483]"
                        : "bg-[#8B6B4A]"
                    }
                  `}
                >

                  {m.role === "user" ? (
                    <User className="h-4 w-4 text-[#5B3E2B]" />
                  ) : (
                    <Bot className="h-4 w-4 text-white" />
                  )}

                </div>

                {/* BUBBLE */}
                <div
                  className={`
                    max-w-[80%]
                    rounded-2xl
                    px-4
                    py-3
                    text-sm
                    leading-relaxed
                    whitespace-pre-wrap
                    ${
                      m.role === "user"
                        ? "bg-[#8B6B4A] text-white rounded-tr-sm"
                        : "bg-white border border-[#E4D4BC] rounded-tl-sm"
                    }
                  `}
                >

                  {m.content}

                </div>

              </div>
            ))}

            {/* LOADING */}
            {loading && (

              <div className="flex gap-3">

                <div
                  className="
                    h-9
                    w-9
                    rounded-full
                    bg-[#8B6B4A]
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Bot className="h-4 w-4 text-white" />
                </div>

                <div
                  className="
                    bg-white
                    border
                    border-[#E4D4BC]
                    rounded-2xl
                    rounded-tl-sm
                    px-4
                    py-3
                    text-sm
                  "
                >
                  AI sedang mengetik...
                </div>

              </div>
            )}

            <div ref={messagesEndRef} />

          </div>

          {/* INPUT */}
          <div
            className="
              p-4
              border-t
              border-[#E5D7C5]
              bg-[#FFFDF9]
              flex
              gap-2
            "
          >

            <Input
              value={input}

              onChange={(e) =>
                setInput(e.target.value)
              }

              onKeyDown={(e) =>
                e.key === "Enter" && handleSend()
              }

              placeholder="Tanyakan tentang Endek Bali..."

              className="
                flex-1
                border-[#D8C2A0]
                focus-visible:ring-[#B08968]
              "
            />

            <Button
              size="icon"

              onClick={handleSend}

              disabled={loading}

              className="
                bg-[#8B6B4A]
                hover:bg-[#6F4E37]
                text-white
              "
            >

              <Send className="h-4 w-4" />

            </Button>

          </div>
        </div>
      </div>
    </section>
  );
};