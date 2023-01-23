import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";

const Gridjs = () => {
    return (
        <Grid
        data={[
    ['John', 'john@example.com'],
    ['Mike', 'mike@gmail.com']
                ]}
        columns={['Name', 'Email']}
  search={true}
  pagination={{
    enabled: true,
    limit: 1,
  }}
/>
    )
}

export default Gridjs


