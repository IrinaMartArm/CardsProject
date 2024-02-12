import { useCallback, useMemo } from 'react'

type UsePaginationParamType = {
  currentPage: number
  onPageChange: (page: number) => void
  pageSize: number
  siblingCount?: number
  totalCount: number
}
type PaginationRange = ('...' | number)[]

const DOTS = '...'

const Range = (start: number, end: number) => {
  const length = end - start + 1

  return Array.from({ length }, (_, idx) => idx + start)
}

export const usePagination = ({
  currentPage,
  onPageChange,
  pageSize,
  siblingCount = 1,
  totalCount,
}: UsePaginationParamType) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize)

    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5

    /*
			  Case 1:
			  If the number of pages is less than the page numbers we want to show in our
			  paginationComponent, we return the range [1.totalPageCount]
			*/
    if (totalPageNumbers >= totalCount) {
      return Range(1, totalPageCount)
    }

    /*
				Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
			*/
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalCount)

    /*
			  We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
			*/
    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalCount

    /*
				Case 2: No left dots to show, but rights dots to be shown
			*/
    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount
      const leftRange = Range(1, leftItemCount)

      return [...leftRange, DOTS, totalCount]
    }

    /*
				Case 3: No right dots to show, but left dots to be shown
			*/
    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount
      const rightRange = Range(totalCount - rightItemCount + 1, totalCount)

      return [firstPageIndex, DOTS, ...rightRange]
    }

    /*
				Case 4: Both left and right dots to be shown
			*/
    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = Range(leftSiblingIndex, rightSiblingIndex)

      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }
  }, [totalCount, pageSize, siblingCount, currentPage]) as PaginationRange

  const lastPage = paginationRange[paginationRange.length - 1]

  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === lastPage

  const onNext = useCallback(() => {
    onPageChange(currentPage + 1)
  }, [currentPage, onPageChange])

  const onPrevious = useCallback(() => {
    onPageChange(currentPage - 1)
  }, [currentPage, onPageChange])

  // function handlePageClicked(pageNumber: number) {
  //   return () => onPageChange(pageNumber)
  // }

  return {
    // handlePageClicked,
    isFirstPage,
    isLastPage,
    onNext,
    onPrevious,
    paginationRange,
  }
}
