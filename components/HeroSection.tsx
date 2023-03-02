import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  Center,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons';
import image from './image.svg';
import newLogo from '../public/Chromogen Logo-1.png';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 3,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({
      variant: 'light',
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}));

export function HeroBullets() {
  const { classes } = useStyles();
  return (
    <div>
      <Center>
        <h1 className={classes.title}>
          {' '}
          <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
            Chromogen
          </Text>{' '}
        </h1>
      </Center>

      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A <span className={classes.highlight}>UI-Focused</span> Test Generation Library <br />{' '}
              for Recoil and Zustand Applications
            </Title>
            <Text color="dimmed" mt="md">
              Chromogen offers the tools you need to efficiently write tests.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <span>
                  <b>Zustand</b> - Providing the chromogenZustandMiddleware to generate your tests
                  by capturing initial and subsequent state changes from your Zustand store.
                </span>
              </List.Item>
              <List.Item>
                <span>
                  <b>Recoil</b> - Our custom atoms and selectors cache all state-changing
                  transactions producing your test suites in rapid time.
                </span>
              </List.Item>
              <List.Item>
                <span>
                  <b>Export Tests</b> - Use our copy-to-clipboard or download buttons to export your
                  auto-generated Jest-unit tests to run in your IDE
                </span>
              </List.Item>
              <List.Item>
                <span>
                  <b>TypeScript based </b> - Implemented with typescript to ensure optimal
                  performance
                </span>
              </List.Item>
            </List>

            <Group mt={30}>
              <Link href="https://demo-zustand-todo.vercel.app/">
                <Button radius="xl" size="md" className={classes.control}>
                  Check out a Demo
                </Button>
              </Link>
              <Link href="https://github.com/open-source-labs/Chromogen">
                <Button variant="default" radius="xl" size="md" className={classes.control}>
                  Source code
                </Button>
              </Link>
            </Group>
          </div>
          <img className={classes.image} src="/Chromogen_Logo-1.png" width={400} height={400} />
        </div>
      </Container>
    </div>
  );
}
