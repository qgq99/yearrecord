import YearRecord from "./components/yearrecord/YearRecord"
import Tooltip from "./components/tooltip/ToolTip"
import { useEffect } from "react"

function App() {

  return (
    <>

      {/* <Tooltip title={"Lorem ipsumet cutate tenetur.Lorem ipsumet cutate tenetur.Lorem ipsumet cutate tenetur.Lorem ipsumet cutate tenetur.Lorem ipsumet cutate tenetur.Lorem ipsumet cutate tenetur.Lorem ipsumet cutate tenetur.Lorem ipsumet cutate tenetur.Lorem ipsumet cutate tenetur.Lorem ipsumet cutate tenetur."}>
        <div
          style={{ width: "200px", height: "200px", border: "1px solid red" }}
        >

        </div>
      </Tooltip> */}
      <YearRecord year={2024} themeColor="green" tooltipTitileFunc={item => `${item.year}年${item.month}月${item.day}日, 浏览${item.data}次`}></YearRecord>
    </>
  )
}

export default App
