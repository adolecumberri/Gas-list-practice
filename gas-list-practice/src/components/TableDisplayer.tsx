
import React, { CSSProperties, Dispatch, FC, useCallback } from 'react';
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
    setGasData: Dispatch<React.SetStateAction<number>>,
    gasData: number,
    setToolTipContent: Dispatch<React.SetStateAction<any>>,
}

const TableDisplayer: FC<ITableDisplayerProps> = ({ data, setGasData, gasData, setToolTipContent }) => {


    let calcAnnualCost = useCallback(
        ({ rate, dailystandingcharge, contractlength }: IProduct) =>
            Math.floor(((gasData * rate) + (365 * dailystandingcharge)) * (contractlength / 12) * 100) / 100
        , [gasData]);


    const checkMeasure = (value: string) => ({ rate: "£", dailystandingcharge: "£", renewable: "%" })[value]

    const loadToolTip = useCallback((
        a: IProduct) =>
        <>
            <div className="info-body">
                <div>
                    <h4 className="" style={{ borderBottom: "2px solid #000", width: "100%" }} >More Information: </h4>
                </div>
                {Object.keys(a).map(value =>
                    <div>
                        <span>{value}:</span> <span>{a[value]} {checkMeasure(value)}</span>
                    </div>)}
            </div>
        </>
        , []);


    let loadTable = useCallback(() =>
        data.map((product) =>
            <div style={s.tableRow}>
                <div style={s.tableCol}>{product.supplier}</div>
                <div style={s.tableCol}>{calcAnnualCost(product)}</div>
                <div style={s.tableCol}>{product.contractlength} months</div>
                <div style={s.tableCol}>
                    <input
                        className="form-btn"
                        style={{ padding: "6px" }}
                        type="button"
                        value="More Info"
                        onClick={() => setToolTipContent(loadToolTip(product))}
                    />
                </div>
            </div>
        )
        , [data.length, data]);

    return (
        <div style={s.container} >

            <div style={s.table}>
                <input className="backArrow" type="button" value="X" onClick={() => setGasData(0)} />
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
