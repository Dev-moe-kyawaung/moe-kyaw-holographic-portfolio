import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  question: z.string().trim().min(2).max(500),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = schema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          answer: "Please enter a valid question.",
        },
        { status: 400 },
      );
    }

    const question = result.data.question.toLowerCase();

    let answer =
      "I can help you explore Moe’s skills, projects, architecture, roadmap, workflow, and collaboration options.";

    if (question.includes("android") || question.includes("compose")) {
      answer =
        "Moe focuses on Kotlin, Jetpack Compose, Android architecture, Room, Firebase, REST APIs, Material 3, accessibility, and secure production releases.";
    } else if (question.includes("project")) {
      answer =
        "Featured projects include Secure Wallet, Commerce Orbit, and Health Pulse. Each project page includes its technology stack, metrics, and case-study structure.";
    } else if (
      question.includes("contact") ||
      question.includes("hire") ||
      question.includes("collaboration")
    ) {
      answer =
        "Please use the Contact page or email hello@example.com for collaboration inquiries.";
    } else if (
      question.includes("security") ||
      question.includes("keystore")
    ) {
      answer =
        "Security priorities include Android Keystore, server-side secrets, secure API handling, input validation, CI/CD protection, and production release checklists.";
    }

    return NextResponse.json({ answer });
  } catch {
    return NextResponse.json(
      {
        answer: "The assistant is temporarily unavailable.",
      },
      { status: 500 },
    );
  }
}
