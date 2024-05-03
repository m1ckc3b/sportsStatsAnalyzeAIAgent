import OpenAI from "openai";
import { message } from "./message";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

// Create assistant
const assistant = await openai.beta.assistants.create({
  name: "Sports Analyzer",
  instructions: "You are a sports stats expert. Answer the questions about sports stats.",
  tools: [],
  model: "gpt-3.5-turbo"
})

// Create a thread
const thread = await openai.beta.threads.create()

// Add message to thread
const message = await openai.beta.threads.messages.create(
  thread.id,
  {
    role: "user",
    content: message
  }
)