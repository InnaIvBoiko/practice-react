import {
  Section,
  Container,
  Heading,
  CryptoHistory,
  ForbesList,
} from 'components';

import BlogCard from 'components/BlogCard/BlogCard';
import Statistics from 'components/Statistics/Statistics'

import article from './data/article.json';
import stats from './data/stats.json';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading title="Task 1 Blog Card" bottom />
        <BlogCard article={article} />

        <Heading title="Task 2 Statistics" top bottom />
        <Statistics title="Main Statistics" stats={stats} />

        <Heading title="Task 3 Forbes list" top bottom />
        <ForbesList />

        <Heading title="Task 4 Crypto history" top bottom />
        <CryptoHistory />
      </Container>
    </Section>
  );
}