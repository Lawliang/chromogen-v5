import { useState } from 'react';
import { createStyles, Header, Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ActionToggle } from './ActionToggle';
import ChromogenLogo from '../public/transparentLogo.png';

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    marginTop: '5px',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface HeaderSimpleProps {
  links: { link: string; label: string }[];
  colorScheme: string;
  toggleColorScheme: () => void;
}

export function HeaderSimple({ links, colorScheme, toggleColorScheme }: HeaderSimpleProps) {
  console.log({ colorScheme });
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      target="_"
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={70} mb={0}>
      <Container className={classes.header}>
        <img id="Chromogen Logo" src="/transparentLogo.png" width={60} height={60} />
        <Group spacing={5} className={classes.links}>
          {items}
          <ActionToggle colorScheme={colorScheme} toggleColorScheme={toggleColorScheme} />
        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
      </Container>
    </Header>
  );
}
