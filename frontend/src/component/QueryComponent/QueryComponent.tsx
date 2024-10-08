import { HookProp, useTextApi } from './queryCopHk'

interface QueryComponentProps {
  query: string;
  list: HookProp[]
  setShowQueryComponent: () => void
}

const QueryComponent: React.FC<QueryComponentProps> = ({ query, list, setShowQueryComponent }) => {

  const { response, loading, error } = useTextApi(query, list)


  return (
    <div className="p-6 bg-gray-100 min-h-screen text-black flec fle-col items-start">

      <h1 className="w-screen text-xl font-bold mb-4">User's input:</h1>
      <p className="mb-4">{query}</p>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      
      {response && (
        <div>
          <h2 className="text-xl text-black font-bold mb-4">Result:</h2>
          <p className="mb-4">{response}</p>
          <button
            onClick={setShowQueryComponent}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default QueryComponent;
