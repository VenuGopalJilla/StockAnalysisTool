import os
import pandas as pd


def create_files():
    df = pd.read_csv(os.path.join(os.getcwd(), "next_30_days.csv"))
    path = os.path.join(os.getcwd(), "simulation")
    if not os.path.exists(os.path.join(os.getcwd(), "simulation")):
        os.makedirs(os.path.join(os.getcwd(), "simulation"))

    cols = ['predicted_column', 'actual',
            'predicted', 'close', 'date', 'company']
    df = df[cols]

    for n, g in df.groupby(by=['company']):
        lower = g.iloc[0]
        upper = g.iloc[1]

        date = [d.strip()
                for d in lower['date'][1:-1].replace("\'", "").split(",")]
        close = [float(c.strip()) for c in lower['close'][1:-1].split(",")]
        actual_lb = [float(a.strip())
                     for a in lower['actual'][1:-1].split(",")]
        predicted_lb = [float(p.strip())
                        for p in lower['predicted'][1:-1].split(",")]
        actual_ub = [float(a.strip())
                     for a in upper['actual'][1:-1].split(",")]
        predicted_ub = [float(p.strip())
                        for p in upper['predicted'][1:-1].split(",")]

        cols = ["date", "close", "actual lb",
                "predicted lb", "actual ub", "predicted ub"]
        refdf = pd.DataFrame(zip(date, close, actual_lb,
                                 predicted_lb, actual_ub, predicted_ub), columns=cols)

        refdf["actual ub close diff"] = refdf["close"] - \
            refdf["close"] * refdf["actual ub"]
        refdf["predicted ub close diff"] = refdf["close"] - \
            refdf["close"] * refdf["predicted ub"]
        refdf["actual lb close diff"] = refdf["close"] - \
            refdf["close"] * refdf["actual lb"]
        refdf["predicted lb close diff"] = refdf["close"] - \
            refdf["close"] * refdf["predicted lb"]
        refdf["predicted lb ub diff"] = refdf["predicted ub close diff"] - \
            refdf["predicted lb close diff"]
        refdf["predicted lb %"] = 1 - refdf["predicted lb"]
        refdf["predicted ub %"] = refdf["predicted ub"] - 1
        refdf["invest"] = refdf.apply(lambda row: True if row["predicted lb %"] < 0.01 and (
            row["predicted ub %"] - row["predicted lb %"]) > 0.1 else False, axis=1)
        refdf["exit"] = refdf.apply(lambda row: True if row["predicted ub %"] < 0.01 and (
            row["predicted ub %"] + row["predicted lb %"]) > 0.01 else False, axis=1)
        refdf.to_csv(os.path.join(path, str(n[:6])+".csv"), index=None)


def simulation(refdf, investment=10000):
    invest = False
    shares = 0
    for _, row in refdf.iterrows():
        if row["invest"]:
            if invest is False:
                shares = int(investment / row['close'])
                investment = investment - shares * row['close']
                invest = True
        if row['exit']:
            if invest:
                investment = investment + shares * row['close']
                invest = False
    else:
        if invest:
            investment = investment + shares * row['close']
            invest = False


if __name__ == "__main__":
    create_files()
