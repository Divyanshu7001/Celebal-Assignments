import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Page,
  Sort,
  Filter,
  Toolbar,
  Edit,
  ExcelExport,
  PdfExport,
  Inject,
  ContextMenu,
} from "@syncfusion/ej2-react-grids";
import { ordersData, ordersGrid } from "../data/dummy";
import { Header } from "../components";

const Orders = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowFiltering
        toolbar={["Search", "Add", "Edit", "Delete", "Update", "Cancel"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        pageSettings={{ pageCount: 5 }}
        width="auto"
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            ContextMenu,
            Page,
            Sort,
            Filter,
            Toolbar,
            Edit,
            ExcelExport,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
