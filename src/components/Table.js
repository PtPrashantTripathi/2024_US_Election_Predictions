// src/components/Table.js
function Table({ data }) {
    return (
                <table className="min-w-full bg-white shadow-md rounded-lg">
                    <thead>
                        <tr>
                            <th className="py-3 px-6 bg-gray-800 text-white text-left">
                                State
                            </th>
                            <th className="py-3 px-6 bg-gray-800 text-white text-left">
                                Winner
                            </th>
                            <th className="py-3 px-6 bg-gray-800 text-white text-left">
                                Trump Votes
                            </th>
                            <th className="py-3 px-6 bg-gray-800 text-white text-left">
                                Kamala Votes
                            </th>
                            <th className="py-3 px-6 bg-gray-800 text-white text-left">
                                Total Votes
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr
                                key={index}
                                className={`${index % 2 === 0 ? "" : "bg-gray-50"} border-b`}
                            >
                                <td className="py-4 px-6">{item.state}</td>
                                <td className="py-4 px-6">{item.winner}</td>
                                <td className="py-4 px-6">{item.trumpVotes}</td>
                                <td className="py-4 px-6">
                                    {item.kamalaVotes}
                                </td>
                                <td className="py-4 px-6">{item.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
    );
}

export default Table;
