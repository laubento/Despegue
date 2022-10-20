import React, {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUserHistory, storeUserInfo } from "../../Redux/Actions"
import {Table, TableBody, TableContainer, TableCell} from "@material-ui/core"

export default function UserHistory() {
    const user = useSelector((state) => state.user)
    const history = useSelector((state) => state.userHistory)
    console.log(history)
    console.log(user)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserHistory(user.id))
    }, [user])

    return(
        <div>

            {history ? 
        (    <Table>
                <TableBody>
                    {history.map((el) => {
                        <div>
                        <TableCell>
                            {el.exit && el.destination}
                        </TableCell>
                        <TableCell>
                            {el.exit && el.destination}
                        </TableCell>
                        <TableCell>
                            {el.exit && el.destination}
                        </TableCell>
                        </div>
                    })}
                </TableBody>
            </Table>
        ) : (
            <div>
                <h1>Loading</h1>
            </div>
        )    
        
        }
        </div>
    )
}