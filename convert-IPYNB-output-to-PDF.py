

def install_necessay_modules():
    import pkg_resources
    import pip
    installed = {pkg.key for pkg in pkg_resources.working_set}
    required = {'reportlab'}
    missing = required - installed
    for module in missing:
        pip.main(['install', module])


def get_text(myfile, outputdata):
    for key, value in myfile.items():
        if key == "text":
            if isinstance(value, list):
                for v in value:
                    if "\n" in v.strip():
                        outputdata.extend(v.splitlines())
                    else:
                        outputdata.append(v.strip())
        if isinstance(value, dict):
            get_text(value, outputdata)
        if isinstance(value, list):
            for val in value:
                if isinstance(val, dict):
                    get_text(val, outputdata)


def convert_to_table_format(outputdata):
    import re
    tableformat = list()
    previous = False
    previousi = -1
    p = 0
    for i in range(len(outputdata)-1):
        current = re.findall(r".*--.*", outputdata[i]) != []
        nextv = re.findall(r".*--.*", outputdata[i+1]) != []
        if current == nextv == True:
            tableformat.append(outputdata[p:i+1])
            p = i+1
    tableformat.append(outputdata[p:])
    for i, table in enumerate(tableformat):
        tableformat[i] = [list(t) for t in table]
    return tableformat


def create_document(filename):
    import json
    import os
    from reportlab.lib.pagesizes import A4, letter
    from reportlab.platypus import SimpleDocTemplate, Table
    from reportlab.platypus.flowables import PageBreak

    filename = filename.strip()
    company_names = {500112: 'SBIN', 500325: 'RELIANCE INDUSTRIES LTD', 532540: 'TATA CONSULTANCY SERVICES LTD', 500209: 'INFOSYS LTD', 532174: 'ICICI BANK LTD', 507685: 'WIPRO LTD', 530965: 'INDIAN OIL CORPORATION LTD',
                     500182: 'HERO MOTOCORP LTD', 532210: 'CITY UNION BANK LTD', 500180: 'HDFC Bank Ltd', 500680: 'PFIZER LTD'}

    with open(filename, "r") as fp:
        ipynbfile = json.load(fp)

    outputdata = list()
    get_text(ipynbfile, outputdata)
    if outputdata == []:
        return
    tableformat = convert_to_table_format(outputdata)
    filename = os.path.splitext(filename)[0]
    pdf = SimpleDocTemplate(filename+".pdf", pagesize=letter)
    width = pdf.width
    height = pdf.height
    content = []
    for table in tableformat:
        myw = width/len(table[0]) + 1
        myh = height/len(table[1]) + 1
        table = Table(table, myw, myh)
        content.append(table)
        content.append(PageBreak())
    pdf.build(content)


if __name__ == "__main__":
    import pip
    import re
    install_necessay_modules()
    import json
    from reportlab.lib.pagesizes import letter
    from reportlab.platypus import SimpleDocTemplate, Table
    from reportlab.platypus.flowables import PageBreak
    filename = input("enter ipynb file name = ").strip()
    create_document(filename)
