import {
  HomeFacadeNamespace,
  IHomeFacade,
} from "@/application/facades/Home/HomeFacade.types"

export class HomeFacade {
  private readonly getExpenses: IHomeFacade["getExpenses"]
  private readonly getGroupedExpenses: IHomeFacade["getGroupedExpenses"]

  constructor(contructor: IHomeFacade) {
    this.getExpenses = contructor.getExpenses
    this.getGroupedExpenses = contructor.getGroupedExpenses
  }

  handle = async (
    request: HomeFacadeNamespace.IRequest,
  ): Promise<HomeFacadeNamespace.IResponse> => {
    const groupedExpenses = await this.getGroupedExpenses.handle({
      month: request.month,
      year: request.year,
    })

    const expenses = await this.getExpenses.handle({
      page: 1,
      pageSize: 5,
      month: request.month,
      year: request.year,
    })

    return {
      expenses,
      groupedExpenses,
    }
  }
}
