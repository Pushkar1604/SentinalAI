from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer
)

from reportlab.lib.styles import getSampleStyleSheet

def create_pdf_report(report_text, filename):

    doc = SimpleDocTemplate(filename)

    styles = getSampleStyleSheet()

    content = []

    title = Paragraph(
        "SentinelAI Investigation Report",
        styles["Title"]
    )

    content.append(title)
    content.append(Spacer(1, 20))

    body = Paragraph(
        report_text.replace("\n", "<br/>"),
        styles["BodyText"]
    )

    content.append(body)

    doc.build(content)

    return filename