import './style.css'

const chat = document.querySelector('#chat')
const form = document.querySelector('#chat-form')
const input = document.querySelector('#message')

// Store conversation history
const messages = []

form.addEventListener('submit', async (event) => {
  event.preventDefault()

  const message = input.value.trim()

  if (!message) return

  // Save user message
  messages.push({
    role: 'user',
    content: message
  })

  // Display user message
  addMessage('You', message)

  input.value = ''
  input.disabled = true

  try {
    // Send request to Ollama
    const response = await fetch('/ollama/api/chat', {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        model: 'llama3.2',
        messages: messages,
        stream: false
      })
    })

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`)
    }

    // Convert response into JavaScript object
    const data = await response.json()

    // Extract AI response
    const reply = data.message.content

    // Save AI response
    messages.push({
      role: 'assistant',
      content: reply
    })

    // Display AI response
    addMessage('AI', reply)

  } catch (error) {
    console.error(error)
    addMessage('Error', error.message)

    // Remove unanswered user message from history
    messages.pop()

  } finally {
    input.disabled = false
    input.focus()
  }
})

// Display messages
function addMessage(sender, content) {
  const element = document.createElement('p')

  element.textContent = `${sender}: ${content}`

  chat.appendChild(element)
}