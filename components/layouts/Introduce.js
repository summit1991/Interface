import { Fragment } from "react";
import { Avatar, Box, Card, CardContent, Chip, Container, Divider, Grid, Link, Stack, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Introduce({ children }) {
  return (
    <Fragment>
      <Container fixed maxWidth='lg' sx={{ padding: 3 }}>
        <header>
          <Grid container>
            <Grid item xs={12} md={5} sx={{ height: 300, paddingX: 3, marginBottom: 3 }}>
              <Avatar
                sx={{ width: 1, height: 1 }}
                src="/profile_image2.jpeg"
                alt="프로필 사진"
              />
            </Grid>

            <Grid item xs={12} md={7} sx={{ paddingX: 2 }}>
              <Typography variant='div' display={"flex"}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'primary.main' }}>해결해 가는 과정 자체</Typography>
                <Typography variant="h5">가 즐겁습니다.</Typography>
              </Typography>
              <Typography paragraph='true' variant="body1">다음은 공동주택 투표 서비스를 개발기 중 일부입니다.</Typography>
              <Typography paragraph='true' variant="body1">
                바야흐로 기술의 시대, 아파트 앱으로 투표에 참여할 수 없다는 건 상상하기가 힘든 일입니다. 투표기능 따위야 구글폼을 쓱 훑어보면 대충 각도가 나온다고 어림짐작됩니다.
                그걸로는 부족하다는 걸 깨닫게 됩니다. 모든 주민들이 우리 앱을 사용하는 것은 아닙니다. 따라서 미사용자에게는 문자 형태로 참여하게 하자라는 방법이 떠오릅니다. 조금 더 고민해보니
                할머니와 할아버지가 생각이 납니다. 그렇습니다. 기술과의 접근성 문제가 있는 분들도 계십니다. 결국 현장투표, 방문투표 형태도 필요합니다. 결국 앱 이외의 수단들은 별도의 인증이 없으니
                부정투표를 방지하기 위한 보안조치도 별도로 필요합니다.
              </Typography>
              <Typography paragraph='true' variant="body1">
                이젠 수도관도 길어지고 수도꼭지 갯수도 증가했습니다. 걱정이 늘어나기 시작합니다. 하지만 한 편으로는 경외심이 생깁니다. 기존 방식은 불편함은 있으나 본질적인 요구들에 모두 순응하고
                있었습니다. 재미있습니다. 새삼 우리의 일상을 순서대로 인지하고 글과 말로 옮겨보면 문제로 보이는 것들이 드러납니다. 어떤 지점에서는 이렇게 멍청하게 행동하고 있었나라는 생각도 듭니다.
                이제 현실의 요구사항은 명확해졌습니다. 설계도를 그리고 도구를 준비하고 제품을 만들 시간입니다.</Typography>
            </Grid>
          </Grid>
        </header>

        <main>
          <Divider variant='middle' sx={{ marginY: 3 }}/>
          <section>
            <Grid container sx={{ marginY: 3, paddingX: 2 }}>
              <Grid item xs={12} md={5}>
                <article>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <header>
                      <Typography component="div" variant="h6" color="primary"><strong>서상훈</strong></Typography>
                    </header>
                    <Box><span style={{ fontVariantNumeric: 'tabular-nums', marginRight: 6 }}>1991. 05. 10</span>
                      <b>광주광역시</b></Box>
                    <Box><span style={{ fontVariantNumeric: 'tabular-nums', marginRight: 6 }}>2017 ~ 2019</span>
                      <b>광주동신고등학교</b></Box>
                    <Box><span style={{ fontVariantNumeric: 'tabular-nums', marginRight: 6 }}>2010 ~ 2015</span><b>전남대학교
                      컴퓨터정보통신공학</b></Box>
                    <Box><span style={{ fontVariantNumeric: 'tabular-nums', marginRight: 6 }}>2011 ~ 2012</span><b>진도대대
                      군사정보</b></Box>

                    <Box sx={{ marginTop: 2 }}>
                      <Box><b>Email:</b> <a href="mailto:tkdgns1991@gmail.com">tkdgns1991@gmail.com</a></Box>
                      <Box><b>Address:</b> 서울특별시 동작구</Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <Link href="https://github.com/summit1991"
                            target="_blank"
                            rel="noopener noreferrer"
                      ><GitHubIcon sx={{ fontSize: 35, color: 'text.primary' }}/></Link>
                      <Divider orientation={"vertical"} flexItem sx={{ marginX: 2 }}/>
                      <Link href="https://www.linkedin.com/in/%EC%83%81%ED%9B%88-%EC%84%9C-423673179/"
                            target="_blank"
                            rel="noopener noreferrer"
                      ><LinkedInIcon sx={{ fontSize: 35, color: 'primary.main' }}/></Link>
                    </Box>
                  </Box>
                </article>
              </Grid>
              <Grid item xs={12} md={6} display={{ xs: 'block', md: 'none' }}>
                <Divider sx={{ marginY: 2 }}/>
              </Grid>
              <Grid item xs={12} md={7}>
                <article>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <header>
                      <Typography component="div" variant="h6" color="primary"><strong>Certificate</strong></Typography>
                    </header>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>정보처리기사</Typography>
                      <Divider sx={{ flex: '1 1 0px', marginX: 2 }}/>
                      <Typography variant="body2"
                                  sx={{ fontVariantNumeric: 'tabular-nums', color: 'text.secondary' }}>2015</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>TOEIC 880</Typography>
                      <Divider sx={{ flex: '1 1 0px', marginX: 2 }}/>
                      <Typography variant="body2"
                                  sx={{ fontVariantNumeric: 'tabular-nums', color: 'text.secondary' }}>2016</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }}>TOEIC Speaking Level 5</Typography>
                      <Divider sx={{ flex: '1 1 0px', marginX: 2 }}/>
                      <Typography variant="body2"
                                  sx={{ fontVariantNumeric: 'tabular-nums', color: 'text.secondary' }}>2016</Typography>
                    </Box>
                    <Box><small>그 외 문서실문사, 워드프로세서 등</small></Box>
                  </Box>
                </article>
              </Grid>
            </Grid>
          </section>
          <Divider variant='middle' sx={{ marginY: 3 }}/>
          <section>
            <Grid container sx={{ paddingX: 2 }}>
              <Grid item xs={12} md={5}>
                <section>
                  <article>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <header>
                        <Typography component="div" variant="h6" color="primary"><strong>Skill</strong></Typography>
                      </header>
                      <Grid container spacing={1}>
                        <Grid item xs={6}>
                          <b>백엔드</b>
                          <Stack spacing={0.25}>
                            <small>- <Chip label='Kotlin' color='primary' size='small'/></small>
                            <small>- <Chip label='Java' color='primary' size='small'/></small>
                            <small>- <Chip label='Spring' color='primary' size='small'/></small>
                            <small>- <Chip label='Hibernate' color='primary' size='small'/></small>
                            <small>- <Chip label='RabbitMQ' color='primary' size='small'/></small>
                          </Stack>
                        </Grid>
                        <Grid item xs={6}>
                          <b>프론트엔드</b>
                          <Stack spacing={0.25}>
                            <small>- <Chip label='HTML' color='warning' size='small'/></small>
                            <small>- <Chip label='CSS' color='warning' size='small'/></small>
                            <small>- <Chip label='Javascript' color='warning' size='small'/></small>
                            <small>- <Chip label='React' color='warning' size='small'/></small>
                            <small>- <Chip label='NEXT.JS' color='warning' size='small'/></small>
                            <small>- <Chip label='Bootstrap' color='warning' size='small'/></small>
                            <small>- <Chip label='MaterialUI' color='warning' size='small'/></small>
                          </Stack>
                        </Grid>
                        <Grid item xs={6}>
                          <b>데이터베이스</b>
                          <Stack spacing={0.25}>
                            <small>- <Chip label='Mysql' color='success' size='small'/></small>
                            <small>- <Chip label='Redis' color='success' size='small'/></small>
                            <small>- <Chip label='ElasticSearch' color='success' size='small'/></small>
                            <small>- <Chip label='DynamoDB' color='success' size='small'/></small>
                            <small>- <Chip label='Oracle' color='success' size='small'/></small>
                          </Stack>
                        </Grid>
                        <Grid item xs={6}>
                          <b>서버관리</b>
                          <Stack spacing={0.25}>
                            <small>- <Chip label='AWS' color='secondary' size='small'/></small>
                            <small>- <Chip label='Docker' color='secondary' size='small'/></small>
                            <small>- <Chip label='ShellScript' color='secondary' size='small'/></small>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Box>
                  </article>
                </section>
              </Grid>
              <Grid item xs={12} md={6} display={{ xs: 'block', md: 'none' }}>
                <Divider sx={{ marginY: 3 }}/>
              </Grid>
              <Grid item xs={12} md={7}>
                <section>
                  <article>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <header>
                        <Typography component="div" variant="h6" color="primary"><strong>Work</strong></Typography>
                      </header>
                      <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <b><a href='https://www.makestar.co/'
                                target='_blank'
                                rel="noopener noreferrer">MAKESTAR</a></b>
                          <Divider sx={{ flex: '1 1 0px', marginX: 2 }}/>
                          <Typography variant="body2"
                                      sx={{ fontVariantNumeric: 'tabular-nums', color: 'text.secondary' }}>2017.01 ~
                            2019.02</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                          <small>글로벌 서비스를 제공하는 크라우드펀딩 기반의 한류 엔터테인먼트 콘텐츠 플랫폼</small>
                          <small><b>- 콘텐츠 API, Management Tool의 전반적인 개발 및 유지보수 담당</b></small>
                        </Box>
                      </Box>
                      <Box sx={{ marginTop: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <b>주식회사 살다</b>
                          <Divider sx={{ flex: '1 1 0px', marginX: 2 }}/>
                          <Typography variant="body2"
                                      sx={{ fontVariantNumeric: 'tabular-nums', color: 'text.secondary' }}>2019.03
                            ~ <span style={{ visibility: "hidden" }}>9999.12</span></Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                          <small>공동주택의 시설, 임대관리 솔루션을 제공하는 플랫폼</small>
                          <small><b>- 입주예약, 투표/설문 등의 공동주택 구성원을 위한 서비스 개발 <a href='https://www.jalsalda.com/'
                                                                            target='_blank'
                                                                            rel="noopener noreferrer"> (잘살아보세)</a></b></small>
                          <small><b>- 계약, 회계 등의 임대관리를 위한 전반적인 서비스 개발 <a href='https://rview.io/'
                                                                        target='_blank'
                                                                        rel="noopener noreferrer">(리얼뷰)</a></b></small>
                        </Box>
                      </Box>
                    </Box>
                  </article>
                  <Divider sx={{ marginY: 2 }}/>
                  <article>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <header>
                        <Typography component="div" variant="h6"
                                    color="primary"><strong>Experience</strong></Typography>
                      </header>
                      <Box>
                        <Box>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <b>콘텐츠 API 최적화</b>
                            <Divider sx={{ flex: '1 1 0px', marginX: 2 }}/>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>since MAKESTAR</Typography>
                          </Box>
                          <Box>

                          </Box>
                        </Box>
                        <Box>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <b>커뮤니티</b>
                          </Box>
                          <Box>

                          </Box>
                        </Box>
                        <Box>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <b>한류 포털을 위한 아티스트 DB 설계 및 관리 시스템</b>
                          </Box>
                          <Box>

                          </Box>
                        </Box>
                        <Box>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <b>아티스트 소셜/창작물 크롤러</b>
                          </Box>
                          <Box>

                          </Box>
                        </Box>
                        <Box>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <b>입주예약</b>
                            <Divider sx={{ flex: '1 1 0px', marginX: 2 }}/>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>since 주식회사 살다</Typography>
                          </Box>
                          <Box>

                          </Box>
                        </Box>
                        <Box>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <b>공동주택 투표/설문</b>
                          </Box>
                          <Box>

                          </Box>
                        </Box>
                        <Box>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <b>거점기반 커머스</b>
                          </Box>
                          <Box>

                          </Box>
                        </Box>
                        <Box>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <b>임대관리 솔루션</b>
                          </Box>
                          <Box>

                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </article>
                </section>
              </Grid>
            </Grid>
          </section>
          <Divider variant='middle' sx={{ marginY: 3 }}/>
          <article>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <header>
                <Typography component="div" variant="h6" color="primary"><strong>주절주절</strong></Typography>
              </header>
              <Typography variant={'body2'}>
                응디즈
              </Typography>
            </Box>
          </article>
        </main>
      </Container>
    </Fragment>
  )
}
