
import React, { CSSProperties, FC, useCallback, useState } from 'react';
import { IProduct } from '../interface/products';


let s: { [x: string]: CSSProperties } = {
    container: {
        width: "100%",
        border: "1px solid black",
        display: "inherit",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "300px",
        minHeight: "500px",
    },
    backArrow: {
        padding: "8px",
        border: "unset",
        background: "#575757",
        color: "#fff",
        fontWeight: "bold",
        position: "absolute",
        marginTop: "-50px",
        marginLeft: "-50px",
    },
    table: {
        display: "table",
        width: "auto",
        backgroundColor: "#FFF",
        border: "1px solid #666666",
    },
    tableRow: {
        display: "table-row",
        width: "auto",
        clear: "both",

    },
    tableCol: {
        float: "left", /* fix for  buggy browsers */
        display: "table-column",
        width: "200px",
        backgroundColor: "#ggg",
        textAlign: "center",
        padding: "4px 0",
        minHeight: "32px",
        lineHeight: "32px"
    }

}



interface ITableDisplayerProps {
    data: IProduct[];
    setGasData: React.Dispatch<React.SetStateAction<number>>,
    gasData: number,
}

const TableDisplayer: FC<ITableDisplayerProps> = ({ data, setGasData, gasData }) => {


    let calcAnnualCost = useCallback(
        ({ rate, dailystandingcharge, contractlength }: IProduct) =>
            Math.floor(((gasData * rate) + (365 * dailystandingcharge)) * (contractlength / 12) * 100) / 100
        , [gasData]);


    let loadTable = useCallback(() =>
        data.map((product) =>
            <div style={s.tableRow}>
                <div style={s.tableCol}>{product.supplier}</div>
                <div style={s.tableCol}>{calcAnnualCost(product)}</div>
                <div style={s.tableCol}>{product.contractlength} months</div>
                <div style={s.tableCol}> <input type="button" value="btn" /></div>
            </div>
        )
        , [data.length, data]);

    return (
        <div style={s.container} >

            <div style={s.table}>
                <input style={s.backArrow} type="button" value="X" onClick={() => setGasData(0)} />
                <div className="table-heder" style={s.tableRow}>
                    <div style={s.tableCol}>Supplier</div>
                    <div style={s.tableCol}>Annual Cost</div>
                    <div style={s.tableCol}>Contract Length</div>
                    <div style={s.tableCol}></div>
                </div>
                {/* {data.map()} */}
                {loadTable()}
            </div>
        </div>
    );
}

export default TableDisplayer;
