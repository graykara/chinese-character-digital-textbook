const navigation = [
  { path: "lesson1/01_008_A1", page: 8 },
  { path: "lesson1/01_008_A2", page: 8 },
  { path: "lesson1/01_008_A3", page: 8 },
  { path: "lesson1/01_010_B1", page: 10 },
  { path: "lesson1/01_010_C1", page: 10 },
  { path: "lesson1/01_011_D11", page: 11 },
  { path: "lesson1/01_011_D12", page: 11 },
  { path: "lesson1/01_011_D13", page: 11 },
  { path: "lesson1/01_012_D14", page: 12 },
  { path: "lesson1/01_012_D15", page: 12 },
  { path: "lesson1/14", page: 14 },
  { path: "lesson1/14-1", page: 14 },
  { path: "lesson1/15", page: 15 },
  { path: "lesson1/15-1", page: 15 },
  { path: "lesson1/15-3", page: 15 },
  { path: "lesson1/16", page: 16 },
  { path: "lesson1/16-1", page: 16 },
  { path: "lesson1/24", page: 24 },
  { path: "lesson1/02_016_B1", page: 16 },
  { path: "lesson1/02_016_C1", page: 16 },
  { path: "lesson1/02_016_L1", page: 16 },
  { path: "lesson1/02_017_D11", page: 17 },
  { path: "lesson1/02_017_D12", page: 17 },
  { path: "lesson1/02_017_D13", page: 17 },
  { path: "lesson1/02_018_D21", page: 18 },
  { path: "lesson1/02_018_D31", page: 18 },
  { path: "lesson1/02_019_D41", page: 19 },
  { path: "lesson1/02_019_D42", page: 19 },
  { path: "lesson1/02_019_D43", page: 19 },
  { path: "lesson1/02_020_D51", page: 20 },
  { path: "lesson1/02_021_D52", page: 21 },
  { path: "lesson1/02_022_I1", page: 22 },
  { path: "lesson1/02_022_K1", page: 22 },
  { path: "lesson1/02_023_J1", page: 23 },
  { path: "lesson2/03_024_A1", page: 24 },
  { path: "lesson2/03_024_A2", page: 24 },
  { path: "lesson2/03_024_A3", page: 24 },
  { path: "lesson2/03_026_B1", page: 26 },
  { path: "lesson2/03_026_C1", page: 26 },
  { path: "lesson2/03_027_D1", page: 27 },
  { path: "lesson2/03_028_L1", page: 28 },
  { path: "lesson2/03_028_E1", page: 28 },
  { path: "lesson2/03_030_E2", page: 30 },
  { path: "lesson2/03_032_F1", page: 32 },
  { path: "lesson2/03_032_F2", page: 32 },
  { path: "lesson2/03_033_G1", page: 33 },
  { path: "lesson2/03_033_H1", page: 33 },
  { path: "lesson2/04_034_B1", page: 34 },
  { path: "lesson2/04_034_C1", page: 34 },
  { path: "lesson2/04_035_D1", page: 35 },
  { path: "lesson2/04_036_L1", page: 36 },
  { path: "lesson2/04_036_E1", page: 36 },
  { path: "lesson2/04_038_E2", page: 38 },
  { path: "lesson2/04_040_F1", page: 40 },
  { path: "lesson2/04_040_F2", page: 40 },
  { path: "lesson2/04_041_G1", page: 41 },
  { path: "lesson2/04_041_H1", page: 41 },
  { path: "lesson2/", page: null },
  { path: "lesson2/", page: null },
];

const extractPathInfo = (pathname: string) => {
  const match = pathname.match(
    /(?:.*\/)?(lesson[12345]\/(?:\d+(?:_\d+)?(?:_[A-Z]\d+)?|\d+(?:-\d+)?))(?:\.html)?$/,
  );
  if (!match) return null;
  const lessonPath = match[1];
  const hasHtmlExt = pathname.endsWith(".html");
  const prefix = pathname.slice(0, pathname.lastIndexOf(lessonPath));

  // 페이지 번호 추출
  // const pageMatch = lessonPath.match(/(\d+)(?:_\d+)?(?:_[A-Z]\d+)?/);
  // const pageNumber = pageMatch ? parseInt(pageMatch[1], 10) : null;
  const pageNumber = findItemByPath(lessonPath)?.page;

  return { lessonPath, hasHtmlExt, prefix, pageNumber };
};

const findAdjacentPage = (pathname: string, direction: "prev" | "next") => {
  const pathInfo = extractPathInfo(pathname);
  if (!pathInfo) return null;
  const { lessonPath, hasHtmlExt, prefix } = pathInfo;
  const currentIndex = navigation.findIndex((item) => item.path === lessonPath);
  if (currentIndex === -1) return null;
  const adjacentIndex =
    direction === "prev" ? currentIndex - 1 : currentIndex + 1;
  if (adjacentIndex < 0 || adjacentIndex >= navigation.length) return null;
  const adjacentPath = navigation[adjacentIndex].path;
  return `${prefix}${adjacentPath}${hasHtmlExt ? ".html" : ""}`;
};

export const getPrevPage = (pathname: string) => {
  return findAdjacentPage(pathname, "prev");
};

export const getNextPage = (pathname: string) => {
  return findAdjacentPage(pathname, "next");
};

export const findPageByNumber = (pageNumber: number) => {
  return navigation.find((item) => item.page === pageNumber);
};

export const findItemByPath = (path: string) => {
  return navigation.find((item) => item.path === path);
};

export const getPageNumberOfPath = (path: string) => {
  return extractPathInfo(path)?.pageNumber;
};
