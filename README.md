# yearrecord
A react component that displays data for each day of the year

You can use it like this:
```jsx
import YearRecord from "./components/yearrecord/YearRecord"

function App() {

  return (
    <>
      <YearRecord
        themeColor="green"
        tooltipTitileFunc={item => `${item.year}年${item.month}月${item.day}日, ${item.data}次浏览`}
      ></YearRecord>
    </>
  )
}

export default App
```
then you will see:
![image](https://github.com/qgq99/yearrecord/assets/58081507/8fefb3dc-a94d-455e-87fd-420093ca7ca8)
