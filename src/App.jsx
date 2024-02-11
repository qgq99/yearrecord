import YearRecord from "./components/yearrecord/YearRecord"
import { generateRandomCompactData } from "./utils/tool"

function App() {

  return (
    <>
      <YearRecord
        // compact={true}
        themeColor="green"
        tooltipTitileFunc={item => `${item.year}年${item.month}月${item.day}日, ${item.data}次浏览`}
      ></YearRecord>
    </>
  )
}

export default App
