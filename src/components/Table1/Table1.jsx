import React,{useMemo} from 'react'
import {useTable} from 'react-table'
import Data from './Data.json'
import {COLUMNS} from './Columns'
import './Table1.css'

function Table1() {

  const data = useMemo(() => Data, [])
  const columns=useMemo(() => COLUMNS, [])

  const tableInstance = useTable({
    columns,
    data
  })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows, 
    prepareRow
  } = tableInstance
  
  return (
    <table {...getTableProps()} class="table table-responsive{-sm|-md|-lg|-xl} ">
      <thead>
      {
        headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
          {
            headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} scope="col">
                {column.render('Header')}
              </th>
            ))
          }
          </tr>
        ))
      }
      </thead>

      <tbody {...getTableBodyProps()}>
      {
        rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
            {
              row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                )
              })
            }
            </tr>
          )
        })
      }
        
      </tbody>
    </table>
  )
}

export default Table1