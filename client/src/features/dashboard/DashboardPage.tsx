import { Container } from "@mui/material";
import axios from "axios";
import MaterialReactTable, { MRT_ColumnDef } from "material-react-table";
import { useEffect, useMemo, useState } from "react";
import { Survey } from "../../app/models/survey";

export default function DashboardPage() {
    const [surveys, setSurveys] = useState<Survey[]>([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/surveys')
            .then(response => setSurveys(response.data))
            .catch(error => console.log(error))
    }, [])
    

    const columns = useMemo<MRT_ColumnDef<Survey>[]>(
        () => [
            {
                accessorFn: (row) => row.employee,
                id: 'employee',
                header: 'Employee Id',
            },
            {
                accessorFn: (row) => row.envRating,
                id: 'envRating',
                header: 'Environment Rating',
            },
            {
                accessorFn: (row) => row.envDetails,
                id: 'envDetails',
                header: 'Environment Details',
            },
            {
                accessorFn: (row) => row.moodRating,
                id: 'moodRating',
                header: 'Mood Rating',
            },
            {
                accessorFn: (row) => row.moodDetails,
                id: 'moodDetails',
                header: 'Mood Details',
            },
        ], [],
    );
    
    return (
        <>
            <Container style={{paddingTop: '4rem'}}>
                <MaterialReactTable columns={columns} data={surveys} />
            </Container>           
        </>
    )
}