const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const database = require("./database")

app.use(express.static('dist'));


const port = 3000

const members = [
	{
		id: 3,
		name: "우혜주",
		loginId: "woo100",
		loginPw: "123qwe"
	},
	{
		id: 1,
		name: "관리자",
		loginId: "admin",
		loginPw: "123qwe"
	}
]

app.get("/api", async (req, res) => {
	const result = await database.run("SELECT * FROM menbers")
	console.log(result)
	res.send(result)
})

app.get("/api3", async (req, res) => {
	const result = await database.run("SELECT * FROM menbers")
	console.log(result)
	res.send(result)
})



app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

app.get("/api/account", (req, res) => {
	// res.send(401)
})

app.post("/api/account", (req, res) => {

	const loginId = req.body.loginId
	const loginPw = req.body.loginPw

  const member = members.find(m => m.loginId === loginId && m.loginPw === loginPw);

  if(member){
    res.send(member)
  }else{
    res.send(404)
  }


})
