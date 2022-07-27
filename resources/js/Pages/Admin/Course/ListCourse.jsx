export default function ListCourse() {
    return (
        <table className="table-fixed w-full text-center text-white mt-10">
            <thead>
                <tr>
                    <td>Image</td>
                    <td>Name</td>
                    <td>Video_URL</td>
                    <td>Mentor</td>
                    <td>Avatar</td>
                    <td>Price</td>
                    <td>Lesson</td>
                    <td>Description</td>
                    <td colSpan={2}>Action</td>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    );
}
