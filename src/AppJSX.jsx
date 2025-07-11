import './App.css'

function AppJSX() {
  const name = 'Daniel';
  const list = ['milk', 'strawberry', 'banana', 'chocolate'];

  return (
    <>
      <h1>
        {`${name} 안녕`}
      </h1>
      <h2>Hello 2</h2>
      <p>name</p>
      <p>{name}</p>
      <ul>
        {
          list.map(item => <li>{item}</li>)
        }
      </ul>
      <div className="awesome" style={{border: "1px solid red"}}>
        <label htmlFor="name">Enter your name: </label>
        <input type="text" id="name"/>
      </div>
      <p>Enter your HTML here</p>
    </>
  )
}

export default AppJSX

/*
* Tutorial 1
* 기본적인 JSX 에서 조심해야할 내용에 대한 싈습
* 1. return 값에는 무조건 하나의 태그를 리턴해야함
*   - 리턴하고자 하는 태그가 복수라면, 하나의 부모 태그로 묶어야함
*   - 이를 위해, div 태그를 사용하거나, <> 를 사용하면 됨
* 2. HTML 태그에 클래스명을 지정하기 위해선 className 속성을 활용해야함
* 3. 리턴값에 자바스크립트를 활용하려면 중괄호 {} 를 사용해야함
*   - 항상 중괄호를 사용하고 일반 텍스트의 경우 {"text"}를 적는 것이 편리함
* */
