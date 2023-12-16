function Demo()
{
    return(
        <div>
            <label for="username">USERNAME:</label>
            <input type="text" id="username" name="username"></input>
        </div>
    )
}
function OneExport()
{
    return(
        <div>
            <Demo/>
            <h1>HELLO KITTY</h1>
        </div>
    )
}
export default OneExport;