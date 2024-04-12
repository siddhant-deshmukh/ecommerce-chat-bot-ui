import ChatMsg from "./components/ChatMsg"
import ChatHeader from "./components/ChatHeader"
import ChatMsgForm from "./components/ChatMsgForm"


function App() {
  return (
    <div id="App">
      <main>
        <div>
          <ChatHeader />
          <ChatMsg />
          <ChatMsgForm />
        </div>
      </main>
    </div>
  )
}

export default App
