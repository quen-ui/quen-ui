import { screen } from "@testing-library/react";
import DataGrid from "../../DataGrid";
import { render } from "../../../../../../tests/renderUtil";

const mockColumns = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Name" }
];

const mockData = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

describe("DataGrid States & Error Handling", () => {
  beforeEach(() => jest.clearAllMocks());

  it("renders loading state when loading=true", () => {
    render(<DataGrid columns={mockColumns} rowData={[]} loading />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
    expect(screen.getByText(/loading data/i)).toBeInTheDocument();
  });

  it("hides loading and shows rows when loading=false", () => {
    render(<DataGrid columns={mockColumns} rowData={mockData} />);
    expect(screen.queryByTestId("loader")).not.toBeInTheDocument();
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
  });

  it("shows empty state when rowData is empty", () => {
    render(<DataGrid columns={mockColumns} rowData={[]} />);
    expect(screen.getByText(/no data available/i)).toBeInTheDocument();
  });

  it("renders custom empty message when noDataMessage provided", () => {
    render(
      <DataGrid
        columns={mockColumns}
        rowData={[]}
        noDataMessage="Custom empty text"
      />
    );
    expect(screen.getByText("Custom empty text")).toBeInTheDocument();
  });

  it("catches cell render error and shows fallback without crashing grid", () => {
    const BrokenCell = () => {
      throw new Error("Cell render failed");
    };
    const columnsWithError = [
      {
        field: "broken",
        headerName: "Broken",
        render: { cell: () => <BrokenCell /> }
      }
    ];

    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    render(<DataGrid columns={columnsWithError} rowData={[{ broken: "x" }]} />);

    expect(screen.queryByText("Cell render failed")).not.toBeInTheDocument();
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it("applies custom loading component", () => {
    render(
      <DataGrid
        columns={mockColumns}
        rowData={[]}
        loading
        loadingComponent={<div data-testid="custom-loader">Custom</div>}
      />
    );
    expect(screen.getByTestId("custom-loader")).toBeInTheDocument();
  });
});
