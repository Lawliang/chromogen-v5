import {
  Text,
  Title,
  Container,
  SimpleGrid,
  useMantineTheme,
  createStyles,
  Avatar,
  NavLink,
  Box,
} from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons';

export const MOCKDATA = [
  {
    name: 'Lawrence Liang',
    github: 'https://github.com/Lawliang',
    linkedin: 'https://www.linkedin.com/in/lawliang/',
  },
  {
    name: 'Maggie Kwan',
    github: 'https://github.com/maggiekwan',
    linkedin: 'https://www.linkedin.com/in/kwanmym',
  },
  {
    name: 'Francois Denavaud',
    github: 'https://github.com/dnvt',
    linkedin: 'https://www.linkedin.com/in/francoisdenavaut/',
  },
  {
    name: 'Brach Burdick',
    github: 'https://github.com/sirbrachthepale',
    linkedin: 'https://www.linkedin.com/in/brachburdick/',
  },
  {
    name: 'Craig Boswell',
    github: 'https://github.com/crgb0s',
    linkedin: 'https://linkedin.com/in/crgbswll',
  },
  {
    name: 'Yuehao Wong',
    github: 'https://github.com/yuehaowong',
    linkedin: 'https://www.linkedin.com/in/yuehaowong',
  },
  {
    name: 'Hussein Ahmed',
    github: 'https://github.com/hali3030',
    linkedin: 'https://www.linkedin.com/in/husseinaahmed',
  },
  {
    name: 'Ian Kila',
    github: 'https://github.com/iannkila',
    linkedin: 'https://www.linkedin.com/in/ian-kila',
  },
  {
    name: 'Michelle Holland',
    github: 'https://github.com/michellebholland',
    linkedin: 'https://www.linkedin.com/in/michellebholland',
  },
  {
    name: 'Amy Yee',
    github: 'https://www.github.com/amyy98',
    linkedin: 'https://linkedin.com/in/amyyee98',
  },
  {
    name: 'Jim Chen',
    github: 'https://github.com/chenchingk',
  },
  {
    name: 'Andy Wang',
    github: 'https://github.com/andywang23',
    linkedin: 'https://www.linkedin.com/in/andy-wang23',
  },
  {
    name: 'Connor Rose Delisle',
    github: 'https://github.com/connorrose',
    linkedin: 'https://www.linkedin.com/in/connorrosedelisle',
  },
  {
    name: 'Cameron Greer',
    github: 'https://github.com/cgreer011',
    linkedin: 'https://www.linkedin.com/in/cameron-greer',
  },
  {
    name: 'Dani Almaraz',
    github: 'https://github.com/dtalmaraz',
    linkedin: 'https://www.linkedin.com/in/dani-almaraz',
  },
  {
    name: 'Erica Oh',
    github: 'https://github.com/ericaysoh',
    linkedin: 'https://www.linkedin.com/in/ericaysoh',
  },
  {
    name: 'Jinseon Shin',
    github: 'https://github.com/wlstjs',
    linkedin: 'https://www.linkedin.com/in/jinseonshin',
  },
  {
    name: 'Lina Lee',
    github: 'https://github.com/lina4lee',
    linkedin: 'https://www.linkedin.com/in/lee-lina',
  },
  {
    name: 'Marcellies Pettiford',
    github: 'https://github.com/mp-04',
    linkedin: 'https://www.linkedin.com/in/marcellies-pettiford',
  },
  {
    name: 'Nicholas Shay',
    github: 'https://github.com/nicholasjs',
    linkedin: 'https://www.linkedin.com/in/nicholasjs',
  },
  {
    name: 'Ryan Tumel',
    github: 'https://www.github.com/rtumel123',
    linkedin: 'https://www.linkedin.com/in/ryan-tumel',
  },
  {
    name: 'Sung Kim',
    github: 'https://www.github.com/smk53664',
    linkedin: 'https://www.linkedin.com/in/smk53664',
  },
];

interface MemberProps {
  name: React.ReactNode;
  github: string;
  linkedin?: string;
}

function getAvatarURL(githubLink) {
  return `https://github.com/${githubLink.split('/').pop()}.png?size=200`;
}

export function Member({ name, github, linkedin }: MemberProps) {
  const theme = useMantineTheme();
  return (
    <Box sx={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }}>
      <Avatar src={getAvatarURL(github)} size={100} />
      <Text style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}>{name}</Text>
      <NavLink
        component="a"
        href={github}
        target="_blank"
        label={github.split('/').pop()}
        icon={<IconBrandGithub size={16} stroke={1.5} />}
        variant="subtle"
      />
      {linkedin ? (
        <NavLink
          component="a"
          href={linkedin}
          target="_blank"
          label={linkedin.split('/').pop()}
          icon={<IconBrandLinkedin size={16} stroke={1.5} />}
          variant="subtle"
        />
      ) : (
        ''
      )}
    </Box>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'left',
    },
  },
}));

interface FeaturesGridProps {
  title: React.ReactNode;
  description: React.ReactNode;
  data?: MemberProps[];
}

export function FeaturesGrid({ title, description, data = MOCKDATA }: FeaturesGridProps) {
  const { classes, theme } = useStyles();
  const features = data.map((feature, index) => <Member {...feature} key={index} />);

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>{title}</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          {description}
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={5}
        spacing={theme.spacing.xl * 1}
        breakpoints={[
          { maxWidth: 980, cols: 4, spacing: 'xl' },
          { maxWidth: 755, cols: 3, spacing: 'xl' },
          { maxWidth: 580, cols: 2, spacing: 'xl' },
        ]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
