import { BlazeBaseTable } from "../BlazeTables/BlazeBaseTable";

export function TablesPage(){
    const dataset = [{name: "hello"}, {name: "klalaaksd"}]
    return(
        <div>
            <BlazeBaseTable headers={["name"]}>
                {
                    dataset.map((data)=>{
                        return (
                          <tr>
                            <td>{data.name}</td>
                          </tr>
                        );
                    })
                }
            </BlazeBaseTable>
        </div>
    )
}