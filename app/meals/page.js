import { Suspense } from 'react';
import Link from 'next/link';
import classes from './page.module.css';
import Mealgrid from '../../components/meals/mealGrid';
import { getMeals } from '@/lib/meals';
import LoadingOut from './loadingOut';

export const metadata = {
  title: 'Meals',
  description: 'Delicious meals.',
};

async function Meals() {
  const meals = await getMeals();
  return <Mealgrid meals={meals} />;
}

function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Lorem ipsum dolor sit.{' '}
          <span className={classes.highlight}>by you</span>{' '}
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa!</p>
        <p className={classes.cta}>
          <Link href='meals/share'>Share Your Favorit Recepe</Link>
        </p>
      </header>

      <main className={classes.main}>
        <Suspense fallback={<LoadingOut />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}

export default MealsPage;
