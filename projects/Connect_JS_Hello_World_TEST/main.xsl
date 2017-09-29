<?xml version="1.0" encoding="utf-8"?>
<html xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xsl:version="1.0">
<body>
    <xsl:for-each select="Button">
        <button><xsl:value-of name="Button"/></button>
    </xsl>
    <script><xsl:value-of xsl:select="Application/JavaScript"/></script>
</body>
</html>
