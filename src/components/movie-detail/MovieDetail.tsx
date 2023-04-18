'use-client';

import ENVIROMENT from '@/constants/enviroment';
import ROUTES from '@/constants/routes';
import { IPokemonMovie } from '@/interfaces/API';
import { Link, Box, Heading, Image, Stack, Text, Button } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

type MovieDetailProps = {
  movieDetail: IPokemonMovie | null;
};

const MovieDetail = (props: MovieDetailProps) => {
  const { movieDetail } = props;

  return (
    <Stack direction="row" height="400px">
      <Stack w="30%" marginRight="20px">
        <Box>
          <Image
            src={ENVIROMENT.IMAGEURL(movieDetail?.poster_path ? movieDetail?.poster_path : '') || ROUTES.IMAGES.PLACEHOLDER}
            alt={movieDetail?.title}
            boxSize="350px"
          />
        </Box>
      </Stack>
      <Stack w="70%">
        <Stack>
          <Heading textTransform="capitalize">{movieDetail?.title}</Heading>
        </Stack>
        <Stack gap="1rem">
          <Text>{movieDetail?.overview}</Text>

          <Stack spacing={4} direction="row" align="center">
            <Link
              href="https://play.hbomax.com/signIn"
              isExternal
              paddingX="8px"
              paddingY="6px"
              background="#319795"
              borderRadius="10px">
              HBO max <ExternalLinkIcon mx="2px" />
            </Link>
            <Link
              href="https://www.netflix.com/sv/login"
              isExternal
              paddingX="8px"
              paddingY="6px"
              background="#319795"
              borderRadius="10px">
              Netflix <ExternalLinkIcon mx="2px" />
            </Link>
            <Link
              href="https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fna.primevideo.com%2Fauth%2Freturn%2Fref%3Dav_auth_ap%3F_t%3Dsg1kIRD-Jz1cKs6NOs0tI9ZwHvvGzLrH3UyiZHJ9z0ffUAAAAAQAAAABkPgpFcmF3AAAAAPgWC9WfHH8iB-olH_E9xQ%26location%3Dhttps%3A%2F%2Fwww.primevideo.com%2Foffers%2Fnonprimehomepage%3Fref_%253Ddvm_pds_brd_sv_hk_s_g_mkw_saWUWq8BS-dc_pcrid_645960032293%2526mrntrk%253Dslid__pgrid_42306244928_pgeo_1012108_x__adext__ptid_kwd-2850171361&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&accountStatusPolicy=P1&openid.assoc_handle=amzn_prime_video_sso_us&openid.mode=checkid_setup&siteState=134-2731506-3700367&language=en_US&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0"
              isExternal
              paddingX="8px"
              paddingY="6px"
              background="#319795"
              borderRadius="10px">
              Prime Video <ExternalLinkIcon mx="2px" />
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MovieDetail;
