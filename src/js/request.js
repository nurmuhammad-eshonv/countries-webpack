const request =  async(resourse) => {
    const req = await fetch(resourse)
    const data = await req.json()
    return data
}

export default request