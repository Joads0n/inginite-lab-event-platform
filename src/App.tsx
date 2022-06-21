import { gql, useQuery } from '@apollo/client';

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`
interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery(GET_LESSONS_QUERY);
  console.log(data);

  return (
    <ul>
      {data?.lessons.map((lesson: Lesson) => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App
